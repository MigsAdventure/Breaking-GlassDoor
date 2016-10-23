select round(avg(advancement)) from scores
where company_id = $1;
