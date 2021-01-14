create database dbBank
use dbBank

create table tblCustomers(
Reference_id int identity(1,1) primary key,
First_name varchar(30) not null,
middle_name varchar(30) ,
Last_name varchar(30) not null,
Father_name varchar(30) not null,
mobile_number varchar(15) not null,
email_id varchar(40) not null,
account_type varchar(20) not null,
aadhar_number varchar(16) not null,
date_of_birth Date not null,
age int not null,
gender varchar(10) check(gender in('female','male','prefer not to say')),
Residential_address varchar(100) not null,
permanent_address varchar(100) not null,
occupation_Type varchar(30) not null,
source_of_income varchar(30) not null,
gross_income float not null,
account_OpenDate Date,
approved_status varchar(10),
approved_by varchar(20) references tbladmin(admin_id),
approved_date Date)

--------------------------------
create table tblBankingCustomers(
 Reference_id int references tblCustomers(Reference_id),
 customer_id int identity(1000,1) primary key,
 account_number int not null unique,
account_OpenDate Date)

insert into tblBankingCustomers values (17,789456,'2021-01-07')
insert into tblBankingCustomers values (18,789123,'2021-01-06')
insert into tblBankingCustomers values (19,123123,'2021-01-07')
insert into tblBankingCustomers values (20,222222,'2021-01-07')
insert into tblBankingCustomers values (21,111111,'2021-01-07')
insert into tblBankingCustomers values (28,123456,'2021-01-09')
insert into tblBankingCustomers values (29,456789,'2021-01-10')


create table tblNetBanking(
user_id int references tblBankingCustomers(customer_id),
account_number int not null unique,
password varchar(15) not null unique,
transaction_password varchar(15) not null unique)


select * from tblNetBanking

alter table tblNetBanking add primary key(account_number) 


create table tblTransactions(
transaction_id int identity(100,1) primary key,
customer_id int references tblBankingCustomers(customer_id),
transaction_type varchar(10),
from_account int,
to_account int,
from_Account_balance float,
to_Account_balance float,
 amount float,
transaction_date Date,
remarks text)
---------------------------------------------
alter table tblTransactions
drop constraint PK__tblTrans__85C600AF3E14898E

alter table tblTransactions
drop column transaction_id

alter table tblTransactions
add transaction_id int identity(10000000,1) primary key
---------------------------------------------
sp_help tblTransactions
create table tblBalance(
customer_id int references tblBankingCustomers(customer_id),
account_number int primary key,
account_type varchar(20),
Name varchar(40),
balance float default 500.00)

drop table tblBalance


create table tblBeneficiaries(
beneficiary_id int identity(10,1) primary key,
customer_id int references tblBankingCustomers(customer_id),
account_number int,
beneficiary_account_number int,
 nickname varchar(20)
)

create table tblLocked(
user_id int references tblBankingCustomers(customer_id),
account_number int primary key)

drop table tblLocked



create table tbladmin(
admin_id varchar(20) primary key,
password varchar(15) not null unique)


insert into tblCustomers(First_name,Last_name,Father_name,mobile_number,email_id,account_type,aadhar_number,
 date_of_birth,age ,gender ,Residential_address,permanent_address,occupation_Type,source_of_income,
 gross_income ,account_OpenDate ,approved_by ,approved_date) values('divya','kalwal','narsing','8639800091','divya@gmail.com',
 'savings','')


 select * from tblCustomers
 select * from tblBankingCustomers
 select * from tblNetBanking


 create proc proc_ValidReg
 (@ano int)
 as
	begin
		select account_number from tblNetBanking where account_number=@ano
end

create proc proc_ValidCust
(@aadharno varchar(16))
as
	begin
		select aadhar_number from tblCustomers where aadhar_number=@aadharno
end

create proc sp_LoginCheck(@userid int, @pwd varchar(15))
as
begin
	select user_id, password from tblNetBanking
	where user_id=@userid and password=@pwd
end

create proc proc_CheckCust(@accno int)
as
begin
	select account_number from tblBankingCustomers where account_number=@accno
end

------------------------------------------------------------
/*For User Profile*/

create procedure procedure_GetUserProfilesForCustomers(@id int)
as
begin
	select First_name,middle_name,Last_name,mobile_number,email_id,aadhar_number,gender,date_of_birth,Residential_address,permanent_address,
	 occupation_Type from tblCustomers cust join tblBankingCustomers bankcust on  cust.Reference_id = bankcust.Reference_id
	 join tblNetBanking netbank on netbank.user_id = bankcust.customer_id where netbank.user_id = @id
end

/*For Recent Transactions*/
create procedure Recent_Transactions(@id int)
as
begin
	select top 5 * from tblTransactions where customer_id = @id order by transaction_date desc 
end

/*For Account Summary*/
create procedure proc_accountsummary(@id int)
as
begin
  select account_number,balance from tblBalance where customer_id = @id
end

/*For Mini Statement*/
create procedure Mini_Statement1(@id int,@start_date varchar(10),@end_date varchar(10))
as
begin
	select transaction_id,transaction_type,transaction_date,amount,from_Account_balance,remarks from tblTransactions 
where customer_id = @id and transaction_date between @start_date and  @end_date
end


/* To edit details*/
create procedure get_ReferenceId (@id int)
as
begin
	select cust.Reference_id from tblCustomers cust join tblBankingCustomers bankcust on  cust.Reference_id = bankcust.Reference_id
	 join tblNetBanking netbank on netbank.user_id = bankcust.customer_id where netbank.user_id = @id
end

/*Track Application*/
create procedure trackApplication (@refid int)
as
begin
select Reference_id,account_type,approved_status,approved_date from tblCustomers where Reference_id=@refid
end

/*Summary New Procedure*/
create procedure proc_Recent_Transactions(@account int)
as
begin
select top 5 * from tblTransactions where from_account = @account or to_account = @account order by transaction_date desc
end

/*Mini-Statement New Procedure*/
alter procedure proc_Mini_Statement1(@account int,@start_date varchar(10),@end_date varchar(10))
as
begin
select transaction_id,transaction_type,transaction_date,amount,from_Account_balance,remarks from tblTransactions
where (from_account = @account or to_account = @account) and (transaction_date between @start_date and @end_date)
end
------------------------------------------------------------------------------------
create proc proc_test(@userid int)
as begin
	select customer_id from tblBankingCustomers as present
	join tblNetBanking on present.customer_id=tblNetBanking.user_id
	where tblNetBanking.user_id=@userid
end

create proc proc_test2(@userid int)
as begin
	select customer_id from tblBankingCustomers where customer_id=@userid
end

create proc proc_test3(@userid int)
as begin
	select user_id from tblNetBanking where user_id=@userid
end

delete from tblNetBanking where account_number=852963

---------------------------------------------------------------------------------------------------------------------------
create proc sp_DisplayTransaction(@trans_id int)
as
begin
	select transaction_id,transaction_type,to_account,amount,from_account,transaction_date,remarks 
	from tblTransactions where transaction_id=@trans_id
end


create proc sp_SelectTransactionId(@acnt_no int)
as
begin
	select max(transaction_id) from tblTransactions where from_account=@acnt_no
end


create procedure sp_transact(@cust_id int,@mode varchar(5),@from_acnt int,@to_acnt int,@from_acnt_bal float,@to_acnt_bal float,@amount float,@trans_date Date,@remarks varchar(100))
as begin
begin tran
insert into tblTransactions values(@cust_id,@mode,@from_acnt,@to_acnt,@from_acnt_bal,@to_acnt_bal,@amount,@trans_date,@remarks)
update tblBalance set balance=@from_acnt_bal where account_number=@from_acnt
update tblBalance set balance=@to_acnt_bal where account_number=@to_acnt
Commit tran
end

select * from tblNetbanking
------------------------------------------------------------------------------------------------------
/*Change Password and Transaction Password*/

create proc sp_updateLoginPassword(@user_id int,@l_pwd varchar(15))
as
begin
	update tblNetBanking set password=@l_pwd where user_id=@user_id
end

create proc sp_checkOldPassword(@user_id int,@old_pwd varchar(15))
as
begin
	select user_id from tblNetBanking where password=@old_pwd and user_id=@user_id
end

create proc sp_updateTransactionPassword(@user_id int,@t_pwd varchar(15))
as
begin
	update tblNetBanking set transaction_password=@t_pwd where user_id=@user_id
end

create proc sp_checkOldTransactionPassword(@user_id int,@oldt_pwd varchar(15))
as
begin
	select user_id from tblNetBanking where transaction_password=@oldt_pwd and user_id=@user_id
end

------------------------------------------------------------------------------------------------------
select * from tblCustomers
select * from tblBankingCustomers
select * from tblNetBanking
select * from tblBalance
select * from tblBeneficiaries
select * from tblTransactions

insert into tblBalance values(1001,789456,'savings','Test F',80000)
insert into tblBalance values(1002,789123,'savings','Test 2',80000)
insert into tblBalance values(1003,123123,'savings','Test 3',80000)
insert into tblBalance values(1006,123456,'savings','Rohit',80000)
insert into tblBalance values(1008,456789,'savings','Rishab',80000)

insert into tblBeneficiaries values(1001,789456,123456,'abcd')
insert into tblBeneficiaries values(1002,789123,456789,'efgh')
insert into tblBeneficiaries values(1003,123123,789456,'mnop')
insert into tblBeneficiaries values(1006,123456,456789,'qrst')
insert into tblBeneficiaries values(1006,123456,123123,'uvwx')
insert into tblBeneficiaries values(1008,456789,123456,'yzab')
insert into tblBeneficiaries values(1006,123456,789456,'fghu')

insert into tblBankingCustomers values (30,'111111111','2021-01-11')

create proc proc_sendemail(@email varchar(40))
as begin
	select Reference_id from tblCustomers where email_id=@email
end

----------------------------------------------------------------------
/*Forgot Password*/
select * from tblUserotp

create table tblUserotp
(
email_id varchar(20),
otp int primary key
)


create proc proc_InsertintotblwithEmail(@email varchar(40),@otp int)
as 
begin
  insert into tblUserotp(email_id,otp) values(@email,@otp)
end

create proc proc_resetpssd(@password varchar(30))
as begin
	select password from tblNetBanking join tblBankingCustomers
	on tblNetBanking.user_id = tblBankingCustomers.customer_id
	join tblCustomers on tblBankingCustomers.Reference_id = tblCustomers.Reference_id
	where password=@password
end

proc_resetpssd 'Dummy@123'

create proc proc_OtpCheck2(@mail varchar(40),@otp int)
as 
begin
    select email_id,otp from tblUserotp where email_id=@mail and otp=@otp
end

alter proc proc_uptable(@email varchar(40))
as begin
	select user_id, password from tblNetBanking join tblBankingCustomers
	on tblNetBanking.user_id = tblBankingCustomers.customer_id
	join tblCustomers on tblCustomers.Reference_id=tblBankingCustomers.Reference_id
	where tblCustomers.email_id = @email
end

create proc proc_updatepassword(@userid int, @password varchar(40))
as begin
	update tblNetBanking set password=@password where user_id=@userid
end

proc_uptable 'hrrohit98@gmail.com'
proc_updatepassword 1006,'Hello@123'
----------------------------------------
/*Send User ID*/

alter proc proc_senduserid(@email varchar(30))
as begin
	select user_id from tblNetBanking join tblBankingCustomers
	on tblNetBanking.user_id=tblBankingCustomers.customer_id
	join tblCustomers on tblBankingCustomers.Reference_id=tblCustomers.Reference_id
	where tblCustomers.email_id=@email
end

proc_senduserid 'hrrohit98@gmail.com'

select * from tblUserotp

select * from tblAdmin

create proc proc_GetdetailsForMail(@email varchar(40))
as
begin
select customer_id,account_number from tblBankingCustomers bank join tblCustomers cust
on bank.Reference_id=cust.Reference_id
where cust.email_id=@email
end

/*SP added on 12/01/2021 for Transactions*/

create procedure sp_getEmailId(@customerId int)
as begin 
select c.email_id from tblCustomers c join tblBankingCustomers b on c.Reference_id=b.Reference_id
where b.customer_id=@customerId
end

create procedure proc_Insertbalance(@customerid int, @accountno int, @balance int)
as begin
	insert into tblBalance (customer_id, account_number, balance ) values (@customerid,@accountno, @balance)
end

------------------------------------------------------------------------------------------------------------------
/*Admin*/
create table tblAdminOtp(
 email_id varchar(40),
 opt int primary key)

create proc proc_LoginCheck(@id varchar(20),@pass varchar(20))
as
begin
select admin_id,password from tbladmin where admin_id=@id and password=@pass
end
