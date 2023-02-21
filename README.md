# 35-teach-me-react-context-with-hooks-2023

# New react context in react@16.3

## What is context?

- Context is an object that provides a way to pass data through the component tree without having to pass props down manually at every level.
- Context is designed to share data that is considered "global" for a tree of React components.

## Why statement management is tough ?

- React state is easy to get started with. But passing props down multiple levels through the component tree is painful and cumbersome. Why is it painful ? [Look at the example of why Redux](https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/).

- My explaination why react state is painful.

  1. Less predictable. We have to keep moving the common state up the hierarchy making it less predictable.
     Problem manifests with React State, when in an App, same state is shared by multiple components. If they are just siblings with one parent, we can hold the common state in the parent (as the data should live in only one component) and pass the state as props to the child components. Now imagine what happens when a state has to be shared between components that are far apart in the component tree. The state has to be passed from one component to another until it gets to where it is needed. Basically, the state will have to be lifted up to the nearest parent component and to the next until it gets to an ancestor that is common to both components that need the state and then it is passed down. This makes the state difficult to maintain and less predictable.

  2. Passing data to componentas that do not use them. Also, a known problem with this scenario is that we have to keep pasing the props to intermediate components that do not use them directly. They just pass them further down for others to use them.

## Redux

- Redux is predictable state container for javascript applications.
- Redux is popular. But it comes with :
  1. Its own complexity, deep learning curve.
  2. For many projects, its over kill.

## React Context

- Context is a middle ground.
- Context is what react uses under the hood to pass data around.

## CurrentStep: step1

Step: step1
Branch: 1-without-context

### Learnings: Lets build a simple User Login and inbox without context.
- In UserMenu.js, I have to display a rounded avatar image, on clicking which i need to display a menu.
- <img src="img/1_avatar.png" />
- <img src="img/2_avatar.png" />
- Mistake1: I have assigned avatarRef to div parent
```js
    return <div className="UserMenu" ref={avatarRef} >
        <img
            ...
        />
        ...
    </div>;
```
- If so, this check will fail as e.target will be <img> tag. Not its parent <div>
```js
    const handleClick = (e) => {
        if (e.target !== avatarRef.current) {
            dispatchIsMenuVisible({
                type: HIDE_MENU,
            });
        }
    }
```
- So correct way is to assign the ref to <img> tag:
```js
    return <div className="UserMenu" >
        <img
            ...
            ref={avatarRef}
        />
        ...
    </div>;
```

- Learning2: Always set list-style to ul. Not on li.
    - .UserMenu -> set display: flex, align-iotems: center; position: relative;
    ```css
        /* UserMenu */
        .UserMenu {
            display: flex;
            align-items: center;
            position: relative;
        }

        .UserMenu ul {
            list-style: none;
            margin: 0;
            padding: 5px;
            position: absolute;
            top: 35px;
            right: 5px;
            background-color: #fff;
            box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.5);
        }

        .UserAvatar {
            border-radius: 50%;
            border: 1px solid red;
        }

    ```

- Learning3: Returning a promise that resolves to FAKE_USER in login() method in services/api.js.

- Learning4: currentUser is being passed from LoginPage -> App -> Header -> UserMenu
    1. App <- LoginPage
    2. App -> Header -> UserMenu
    3. App -> MessageList
    - This works okay. But we pass currentUser to bunch of components (eg. MainPage, Header ) that dont care about it.
- One way we can clean it up is React Context which we can explore in next step.
