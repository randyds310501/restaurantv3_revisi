/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(async ({ I }) => {
  I.amOnPage('/');
  pause();

  I.seeElement('.movie-item__content h3 a');

  const firstRestaurant = locate('.movie-item__content h3 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedRestaurantName = await I.grabTextFrom('.movie-item__content h3 a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.movie-item__content h3 a');
  I.click('.movie-item__content h3 a');

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.dontSeeElement('.movie-item');
});
