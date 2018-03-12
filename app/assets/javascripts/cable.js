// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

// export const setSocket = () => (dispatch) => {
//   return App.cable.subscriptions.create({
//     channel: 'GlobalChannel'
//   }, {
//     connected: () => {console.log(`connected to GlobalChannel`);},
//     disconnected: () => {console.log(`disconnected from GlobalChannel`);},
//     received: (data) => {
//       dispatch(parseMessage(data.message));
//     }
//   });
// };
