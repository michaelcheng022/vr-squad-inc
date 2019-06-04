const User = {
    async userListings(parent, args, ctx, info) {
    const listings = await ctx.db.query.listings({}, info);
    console.log(listings);
    console.log(parent.user);
    //return listings;
    return listings.filter(listing => parent.id === listing.user.id);
  }
}

module.exports = User;