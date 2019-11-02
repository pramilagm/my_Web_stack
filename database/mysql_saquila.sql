
 -- What query would you run to get all the customers inside city_id = 312?
--  Your query should return customer first name, last name, email, and address.
SELECT  city.city_id, customer.first_name, customer.last_name, customer.email, address.address
From  customer
JOIN address ON  customer.address_id = address.address_id
JOIN city ON  address.city_id = city.city_id
where address.city_id ='312'

-- What query would you run to get all comedy films?
--  Your query should return film title, description, release year, rating, special features, and genre (category).


SELECT  film.film_id, film.title, film.description, film.release_year, film.rating ,
film.special_features, category.name AS genre
FROM film 
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
where category.name = 'comedy';

-- What query would you run to get all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)?
--  Your query should return customer first name, last name, email, and address.
SELECT customer.first_name, customer.last_name, customer.email, address.address, city.city_id,store.store_id
FROM customer 
JOIN store ON  cutomer.store_id = store.store_id
JOIN address ON cutomer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
WHERE store.store_id = 1 AND city.city_id IN(1,42,312, 459)

-- What query would you run to get all the films with a "rating = G" and "special feature = behind the scenes", 
-- joined by actor_id = 15? Your query should return the film title, description, release year
-- , rating, and special feature. Hint: You may use LIKE function in getting the 'behind the scenes' part.
SELECT  title,description, release_year, rating, special_features
FROM film
WHERE rating = 'G' AND special_features LIKE 'behind the scenes';

-- What query would you run to get all the actors that joined in the film_id = 369? Your query should
--  return the film_id, title, actor_id, and actor_name.

SELECT film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name 
FROM film 
JOIN film_actor ON film.film_id = film_actor.film_id 
JOIN actor ON film_actor.actor_id = actor.actor_id 
 WHERE film.film_id = 369
 
 -- What query would you run to get all drama films with a rental rate of 2.99? 
-- -- Your query should return film title, description, release year, rating, 
-- special features, and genre.
SELECT film.title, film.description, film.release_year,  film.rating ,film.special_features ,
category.name AS genre ,film.rental_rate
FROM film 
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name ='drama' AND  film.rental_rate =2.99;


-- What query would you run to get all the action films which are joined by SANDRA KILMER? Your query should return
--  film title, description, release year, rating, special features, genre (category), and actor's first name 
--  and last name.
SELECT concat(actor.first_name , ' ', actor.last_name) as actor_name, film.title, film.description, film.release_year,  film.rating ,film.special_features ,
category.name AS genre 
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id 
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE  category.name ='action' and actor.first_name='SANDRA' AND actor.last_name ='KILMER';

