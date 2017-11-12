import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { dasherize } from "@ember/string";

export default DS.RESTAdapter.extend({
  pathForType: modelName => pluralize(dasherize(modelName))
});
