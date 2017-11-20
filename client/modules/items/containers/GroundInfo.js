import GroundInfo from '../components/GroundInfo.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('GROUNDINFO_ERROR');
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  Ground: actions,
  clearErrors: actions. users. clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GroundInfo);
