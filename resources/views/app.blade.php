<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sample Fitness websites by IHTechno</title>
        <meta name="description" content="IHTechno specializes in website and mobile application development, offering innovative solutions to enhance your digital presence.">
        <meta property="og:title" content="Sample Fitness Websites by IHTechno | Website and Mobile Application Development">
        <meta property="og:description" content="IHTechno specializes in website and mobile application development, offering innovative solutions to enhance your digital presence.">
        <meta property="og:image" content="{{ asset('/images/og-image.jpeg') }}">
        <meta property="og:url" content="{{ url()->current() }}">

        <meta property="og:type" content="website">
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>