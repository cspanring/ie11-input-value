import Ember from 'ember';

export default Ember.Controller.extend({
  inputValue: 3,

  actions: {
    getCheckboxValue() {
      let value = document.querySelector('input[type=checkbox]').value;
      // in IE11 value will be "on"
      alert('My value is: ' + value);
    },
  },
});
