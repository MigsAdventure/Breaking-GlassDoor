CREATE TABLE companies
(
  id SERIAL PRIMARY KEY NOT NULL,
  name text
);


CREATE TABLE scores
(
  id SERIAL PRIMARY KEY NOT NULL,
  advancement int,
  support int,
  safety int,
  company_id int references companies (id)
);

-- create company
insert into companies (name)
values ($1);
-- create score
insert into scores (advancement, support, safety, company_id)
  values($1, $2, $3, $4);

insert into companies (name)
  values ('Zenefits');

insert into scores (advancement, support, safety, company_id)
  values(80, 60, 30, 1);

insert into scores (advancement, support, safety, company_id)
    values(50, 80, 90, 1);

-- call back averaged scores for advancement
select avg(advancement) from scores
where company_id = $1;
-- call back averaged scores for advancement
select avg(support) from scores
where company_id = $1;
-- call back averaged scores for advancement
select avg(safety) from scores
where company_id = $1;
