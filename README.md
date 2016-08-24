# Inventory App
* FilterableProductTable
  * SearchBar
  * ProductTable
    * ProductCategoryRow
    * ProductRow

Build the static version first - don't use state at all
Data in this app:
* The original list of products (passed as props)
* The search text the user has entered (state - value changes over time)
* The value of the checkbox (state - value changes over time)
* The filtered list of products (can be computed based on original list and values of the search text and the checkbox)

* Is it passed in from a parent via props? If so, it probably isn't state.
* Does it remain unchanged over time? If so, it probably isn't state.
* Can you compute it based on any other state or props in your component? If so, it isn't state.

For each piece of state in your application:
* Identify every component that renders something based on that state.
* Find a common owner component (a single component above all the components that need the state in the hierarchy).
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

* ProductTable needs to filter the product list based on state 
* SearchBar needs to display the search text and checked state
* The common owner component is FilterableProductTable, so it should own the states


