select round(avg(safety)) from scores
where company_id = $1;
