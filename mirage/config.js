export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.'Name'space = '';    // make this `/api`, for example, if your API is 'Name'spaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:'Id'');
    this.put('/posts/:'Id''); // or this.patch
    this.del('/posts/:'Id'');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('companies', () => {
    return {
      'companies': [{
        'Id': 1,
        'Name': 'Company1',
        'address': 1,
        'contacts': [1, 2]
      },
      {
        'Id': 2,
        'Name': 'Company2',
        'address': 2
      },
      {
        'Id': 3,
        'Name': 'Company3',
        'address': 3
      }]
    };
  });

  this.get('contacts/:id', () => {
    return {
      'contacts': [{
        'Id': 1,
        'Name': 'Main'
      },
      {
        'Id': 2,
        'Name': 'Support'
      }]
    }
  });

  this.get('addresses/:id', () => {
    return {
      'addresses': [{
        'Id': 1,
        'IdCompany': 1,
        'Name': 'Address1'
      },
      {
        'Id': 2,
        'IdCompany': 2,
        'Name': 'Address2'
      },
      {
        'Id': 3,
        'IdCompany': 3,
        'Name': 'Address3'
      }]
    };
  });

  this.get('addresses', () => {
    return {
      'addresses': [{
        'Id': 1,
        'IdCompany': 1,
        'Name': 'Address1'
      },
      {
        'Id': 2,
        'IdCompany': 2,
        'Name': 'Address2'
      },
      {
        'Id': 3,
        'IdCompany': 3,
        'Name': 'Address3'
      }]
    };
  });
}
