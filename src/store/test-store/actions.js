/*
export function someAction (context) {
}
*/
export const testActions = state => state.user;

export const bestellThis = ({ state }, payload) => {
  console.log(payload);
  console.log(state.bestellungen);
  state.bestellungen.push(payload);
};

export const geliefert = ({ state }, payload) => {
  console.log(payload);
  console.log(state.bestellungen);
  state.bestellungen.splice(state.bestellungen.indexOf(payload), 1);
};

