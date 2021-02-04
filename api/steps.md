# How to build from scratch a Sails MVC with empty project

1. sails new booksmvc
2. select 2 (empty project)
3. just for playing around we updated the routes.js with
3.1 add this line to routes.js --> '/faq': {action: 'faq'},
3.2 there are two options view and actions when placeing a url path 
3.2.1 'view' goes straight away to a view
3.2.2 'action' means that we send this request to a controller
3.3 because we wanted to create a url that sends to a controller, .e.g. faq.js
4. create controller that accepts a request that can handle, e.g. /faq
5. inside module.exports we add two sections:
5.1 exits: that holds the condition to show on success or error a viewTemplatePath
5.2 success (or error) we assign a viewTemplatePath: 'pages/faq' || 'faq' (for the root folder)
5.3 fn: async function <-- this async function renders the view by sending (if any) additional data from the back to the front

(with model)
2'. update on conf/datastores.js adapter and url with your db credentials and connection string
3'. create a new route called /products in route.js
4'. create a new model called Product (api/models/Product.js) - sails generate model Product
5'. create a new controller called product(api/controllers/product.js) - sails generate controller product
5'.1 complete the actual created (empty controller) with 5.1, 5.2, 5.3 and place also the part of inputs: {}
5'.2 rename the XXXController to another name

