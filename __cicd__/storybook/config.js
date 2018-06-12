
import { configure, storiesOf } from '@storybook/react';

const create = (data) => {
  const files = data.context.keys();
  const filter = files.reduce(function(acc, filename) {
    const paths = filename.split('/');
    if (WEBPACK_CWD.indexOf(paths[1]) !== -1) {
      acc.push(paths[1]);
    }
    return acc;
  }, []);

  return {
    ...data,
    files,
    stories: files.reduce(function(acc, filename) {
      const paths = filename.split('/');
      if(filter.length) {
        if(filter.indexOf(paths[1]) !== -1) {
          acc.push({
            ...data,
            filter,
            filename,
            source: data.context(filename),
          });
        }
      } else {
        acc.push({
          ...data,
          filter,
          filename,
          source: data.context(filename),
        });
      }
      return acc;
    }, [])
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
    group: 'packages',
    context: require.context('../../packages/', true, /.stories.jsx?$/)
  }).stories.forEach(parseModule);
};

configure(loadStories, module);
