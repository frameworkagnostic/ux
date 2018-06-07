
import { configure, storiesOf } from '@storybook/react';

const create = (data) => {
  const files = data.context.keys();
  return {
    ...data,
    files,
    stories: files.map(function(filename) {
      return {
        ...data,
        source: data.context(filename),
      };
    })
  }
};

const parseModule = (data) => {
  const { name, examples, group } = data.source;
  const groupBy = [data.group, name].filter((c) => c && c.length).join('/');
  Object.keys(examples).forEach((exampleName) => {
    storiesOf(groupBy, module)
      .add(exampleName, examples[exampleName]);
  });
};

const loadStories = () => {
  create({
    group: 'base-components',
    context: require.context('../../src/', true, /.stories.jsx?$/)
  }).stories.forEach(parseModule);

  create({
    group: 'base-components',
    context: require.context('../../migration/', true, /.stories.jsx?$/)
  }).stories.forEach(parseModule);
};

configure(loadStories, module);
