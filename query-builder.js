
// Aggregations used to build the different parts of the UI
const moment = require('moment');

const entities = [
  'nested(enriched_text.entities).filter(enriched_text.entities.type:Drug).term(enriched_text.entities.text,count:10)',
  'nested(enriched_text.entities).filter(enriched_text.entities.type:Organization).term(enriched_text.entities.text)',
  'term(enriched_text.entities.text)',
];

const sentiments = [
  'term(blekko.basedomain).term(docSentiment.type)',
  'term(docSentiment.type)',
  'min(docSentiment.score)',
  'max(docSentiment.score)',
];

const mentions = [
  // eslint-disable-next-line
 /*'filter(enriched_text.entities.type::Drug).term(enriched_text.entities.text).timeslice(blekko.chrondate,1day).term(docSentiment.type)'*/
 'filter(enriched_text.entities.type::Drug).term(enriched_text.entities.text).term(docSentiment.type)'
];

module.exports = {
  aggregations: [].concat(entities, sentiments, mentions),
  entities,
  sentiments,
  mentions,
  build(query, full) {
//params.aggregations = [].concat(entities);
    const params = {
      count: 5,
      return: 'enriched_text.text',
      query: `"${query.text}"`,

    };
    if (full) {
      params.aggregations = [].concat(entities, sentiments, mentions);

    }
    if (query.date) {
    // params.filter = `blekko.hostrank>20,blekko.chrondate>${moment(query.date.from).unix()},blekko.chrondate<${moment(query.date.to).unix()}`;
    }


    return params;
  },
};
