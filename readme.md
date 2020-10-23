<img src="images/screenshots/vanilla-js-router.png" alt="" style="margin: 0 auto; max-width: 100%;" />


# Vanilla JS Router

This is an example of a simple router in plain JavaScript.


## How to run

This project can be run with <code>live-server</code>. To install live server, run:

<pre>
npm install -g live-server
</pre>

Then run the following in the project directory:

<pre>
live-server --port=1234
</pre>

To preview, navigate to:

<pre>
http://127.0.0.1:1234/
</pre>


## File structure and customization

### App layout

<strong>index.html</strong>

Here you can edit the overall app layout and add/remove navigation links.
The navigation links have to have CSS class <code>'router-link'</code> in
order for the router to function.

<pre>
&lt;nav class="nav">
  &lt;ul>
    &lt;li>&lt;a class="router-link" href="">Welcome&lt;/a>&lt;/li>
    &lt;li>&lt;a class="router-link" href="about">About&lt;/a>&lt;/li>
    &lt;li>&lt;a class="router-link" href="contact">Contact&lt;/a>&lt;/li>
  &lt;/ul>
&lt;/nav>
</pre>

Whenever the app route changes, page templates are loaded into the element
with <code>id="root"</code>:

<pre>
&lt;main id="root" class="main">
&lt;/main>
</pre>


### Router

<strong>scripts/modules/router.js</strong>

The majority of the router logic is located here. You can specify new routes
and their corresponding templates in the <code>routes</code> array:

<pre>
static routes = [
  ...
  new Route({
    path: 'about',
    title: 'About',
    template: About.template,
  }),
  ...
];
</pre>

Router link click and browser history back/forward button click handlers
are here as well.


### Page templates

<strong>scripts/templates/</strong>

New page templates can be added here, then imported into <code>router.js</code>. 
See any of the existing template files for an example.
