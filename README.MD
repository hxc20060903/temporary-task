# Overall structure
Both of front-end and server-side is implemented. However authentication implementation is missing.

## frontend structuref

* folder location: src/app
* folder structure
  * **components:** generic React Components without domain knowledge. Can be derived as a common component-repository for reuse / alignment if possible
  * **core:** Some critical but generic functional modules **with as little domain knowledge as possible** , for instance *Internalization*, *Navigation*, *Api sender*, *authentication*. **OpenID** is preferred for user authentication. I am sorry that I didn't work on this part to ensure reliable security, as it really involves a lot of work.
  * **modules:** functional modules with domain knowledge, for instance *Contract Management*
  * **AppLayout.jsx**: Self-descriptive
  * **Routes.jsx**: Routing integration with all modules
  * **bem.js**: Component class naming practice definition
  * **index.jsx**: Application creator, *should support configuration*
  * **reducer.js**: Redux root reducer definition
  * **epic.js**: Redux-Observable root epic definition

* folder location: src/server
* folder structure
  * **database** mongoose setting
  * **management** server service implementation

***
## asynchronous handling

Because this application cares mostly about data updates, it should pay great attention to asynchronous handling.
I didn't integrate RxJS directly into a React Component as I want to support background jobs.
Furthermore, I don't think coupling React UI life-cycle with asynchronous handling is a good/reliable practice.
That is the reason why I used redux-observable.

## react-router withRouter() with redux

[Notice if you are coding a page rather than a component](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md#important-note)

***

## react-intl key management

The key of each translation involves *domain*, *intention/use-case* and *content*. For instance:

**Contract** is a domain
**TextTitle** is a use-case
**Create** is the exact content identifier of its translation

## core/navigation
To avoid path parameters hardcoded in front-end.
If authentication is to be added, this part needs to be updated somehow as well.

## ~~core/openid~~

## core/sender

can be further updated to support better configuration.
Should *integrate with* **core/openid** to enhance security

## progressive application

we can consider about this if you really want it. That may involve some
module interface changes and React Application life-cycle management
