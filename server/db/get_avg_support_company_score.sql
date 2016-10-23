select round(avg(support)) from scores
where company_id = $1;
