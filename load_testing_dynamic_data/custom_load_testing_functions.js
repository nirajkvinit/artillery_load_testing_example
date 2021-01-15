module.exports = {
  setJSONBody: setJSONBody,
};

function setJSONBody(requestParams, context, ee, next) {
  requestParams.json = {
    userName: 'Catt',
    password: 'frustrated',
  };
  return next(); // MUST be called for the scenario to continue
}
