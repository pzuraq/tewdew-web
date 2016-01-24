import Resolver from 'ember-resolver';

export default Resolver.extend({
  podBasedComponentsInSubdir(parsedName) {
    const podPrefix = `${this.namespace.modulePrefix}/components`;

    if (parsedName.type === 'component' || parsedName.fullNameWithoutType.match(/^components/)) {
      return this.podBasedLookupWithPrefix(podPrefix, parsedName);
    }
  }
});
