import DS from 'ember-data';
import { capitalize } from "@ember/string";

export default DS.RESTSerializer.extend({
  primaryKey: 'Id',

  keyForAttribute(attr) {
    return capitalize(attr);
  }
});