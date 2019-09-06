'use strict';

class CustomError extends Error {
  constructor(message) {
    super();
    this.name = this.constructor.name;
    this.message = message;
  }
}

const handleHelloEvent = async (event, context, callback) => {
  throw new CustomError('hi there!');
};

const handleErrorEvent = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Handled Error!',
        input: event
      },
      null,
      2
    )
  };
};

module.exports = {
  handleHelloEvent,
  handleErrorEvent
};
