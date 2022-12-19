const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  // eslint-disable-next-line no-undef
  it('should return the Restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  }); // eslint-disable-next-line no-undef
  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  }); // eslint-disable-next-line no-undef
  it('can return all of the Restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  }); // eslint-disable-next-line no-undef
  it('should remove favorite Restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });
  // eslint-disable-next-line no-undef
  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
