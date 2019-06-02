This app was built with the intent to create
dynamic components that are easy to maintain. Dynamic means
that hard-coding values was used minimally, and instead,
most values are passed down from parent into the child
component. Creating sensible defaults and doing the
proper null checks was also important so as not to break
the app if a certain value wasn't passed in.

Given time constraints, there were things that could be improved
such as the addition of error boundaries and better fallback options
when data hasn't been retrieved from the server.