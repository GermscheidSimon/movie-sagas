const navigation = {
    router_PushToHistory: (Destination, srcComponent) => {
        console.log('routed to', Destination);
        srcComponent.props.history.push(Destination)
    }
}
module.exports = navigation;