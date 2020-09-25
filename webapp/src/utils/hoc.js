import React from 'react'

export function withUser(InnerComponent) {
    let currentUser = localStorage.getItem('currentUser')
    try {
        currentUser = JSON.parse(currentUser)
    } catch (error) {
        currentUser = currentUser
    }

    if (!currentUser) {
        currentUser = null
    }
    return function OuterComponent(props) {
        return (
            <InnerComponent {...props} currentUser={currentUser} />
        )
    }
}