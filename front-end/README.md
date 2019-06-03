This app was built with the intent to create
dynamic components that are easy to maintain. Dynamic means
that hard-coding values was used minimally, and instead,
most values are passed down from parent into the child
component. Creating sensible defaults and doing the
proper null checks was also important so as not to break
the app if a certain value wasn't passed in.

Given time constraints, there were things that could be improved
such as the addition of error boundaries and better fallback options
when data hasn't been retrieved from the server. To start the server, go into
the server folder and run 'npm start'. Then,
go back to the last directory, go into the client folder and run 'npm start'
as well. I was working on a command to run both concurrently, but due to time
constraints, this is still a work in progress.

The button component contains a media query just to demonstrate that I know
how to use them. In a real app, the common breakpoints should be established so
aso not to create a situation where different rules are being fired across
different components at random breakpoints, which creates a maintenance
nightmare.

Something that increases maintainability is limiting options. For example, all
of the colors the site uses should be stored in a global css file
and any time a color is used, it should be drawn from there. With sass, this
becomes easy due to css variables. The reason for this is to avoid confusion
as to which color should be used for this or that element and to ensure that
the site has a consistent look.

