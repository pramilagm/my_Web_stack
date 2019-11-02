
 -- What query would you run to get all the countries that speak Slovene?
--  Your query should return the name of the country, language and language percentage. 
--  Your query should arrange the result by language percentage in descending order. (1)


SELECT countries.name, languages.language,languages.percentage
From countries
Join languages ON countries.id = languages.country_id
order by percentage desc;


-- What query would you run to display the total number of cities for each country? 
-- Your query should return the name of the country and the total number of cities. 
-- Your query should arrange the result by the number of cities in descending order. (3)

SELECT countries.name, count(cities.id) as no_cities 
FROM countries
JOIN cities ON countries.code = cities.country_code
group by countries.code
ORDER BY count(cities.id)  desc;


-- What query would you run to get all the cities in Mexico with a population of 
-- greater than 500,000? 
-- Your query should arrange the result by population in descending order. (1)

SELECT countries.name, cities.name, cities.population 
FROM countries
JOIN  cities ON countries.id = cities.country_id
WHERE countries.name ='Mexico' AND cities.population>500000 
ORDER BY cities.population DESC;

-- What query would you run to get all languages in each country with a percentage 
-- greater 
-- than 89%? Your query should arrange the result by percentage in descending order. (1)

select countries.name,  languages.language 
FROM countries
JOIN languages ON countries.id = languages.country_id
where languages.percentage>89  
ORDER BY languages.percentage DESC;

-- What query would you run to get all the countries 
-- with Surface Area below 501 and Population greater than 100,000? (2)

SELECT surface_area, population
FROM countries
WHERE  population>100000;
-- What query would you run to get countries with only Constitutional Monarchy
--  with a capital greater than 200 and a life expectancy greater than 75 years? (1)
SELECT government_form, capital,life_expectancy
FROM countries
WHERE government_form='Constitutional Monarchy' AND 200 AND life_expectancy>75;


-- What query would you run to get all the cities of Argentina inside the Buenos Aires 
-- district and have the population greater than 500, 000?
--  The query should return the Country Name, City Name, District and Population. (2)

SELECT countries.name, cities.name, cities.district,cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE countries.name ='Argentina' AND  cities.district ='Buenos Aires' AND cities.population>500000;

-- What query would you run to summarize the number of countries in each region? 
-- The query should display the name of the region and the number of countries. Also,
--  the query
--  should arrange the result by the number of countries in descending order. (2)

SELECT region, count(id) as no_countries
FROM countries
group by region
order by count(id) DESC
