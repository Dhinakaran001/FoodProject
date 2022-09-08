// filter sort and pagination

class ProductFeature {
  constructor(query, querString) {
    this.query = query;
    this.queryString = querString;
  }

  // filter
  filtering() {
    return this;
  }

  // sort
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(" , ").join(" ");
      // console.log('sort by =', sortBy)
      if (sortBy === "price dec") {
        this.query = this.query.sort(sortBy).reverse();
      } else {
        this.query = this.query.sort(sortBy);
      }
    } else {
      this.query.sort("-createdAt");
    }
    return this;
  }

  // pagination
  pagination() {
    return this;
  }
}

module.exports = ProductFeature;
