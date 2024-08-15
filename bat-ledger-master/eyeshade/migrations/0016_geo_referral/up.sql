select execute($$

insert into migrations (id, description) values ('0016', 'geo_referral');

DELETE FROM geo_referral_countries
WHERE
    group_id = '211e57d3-a490-4cf3-b885-47a85f2e1dc0'
AND country_code IN ('MD', 'MK', 'RO', 'SA');

CREATE UNIQUE INDEX IF NOT EXISTS geo_referral_countries_unique_idx ON geo_referral_countries(country_code, created_at);

$$) where not exists (select * from migrations where id = '0016');
