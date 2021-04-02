let navigator;

export const setNavigator = nav => {
    navigator = nav;
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        Navigation.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        )
    )
}