'use strict';

const e = React.createElement;

const Navigation = () => {
  return e(
    "nav",
    {
      className: "navbar navbar-expand-lg navbar-light bg-secondary",
    },
    e(
      "a",
      { className: "navbar-brand", href: "#" },
      e("img", {
        src: "images/BCLogo.png",
        width: "60",
        height: "60",
        className: "d-inline-block align-top",
        alt: "BC logo"
      }),
      e(
        "h1",
        { className: "d-inline-block align-bottom" },
        "  Buckeye Charge Fastpitch Softball"
      )
    ),
    e(
      "button",
      {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      },
      e("span", { className: "navbar-toggler-icon" })
    ),
    e(
      "div",
      { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
      e(
        "ul",
        { className: "navbar-nav mr-auto" },
        e(
          "li",
          { className: "nav-item active" },
          e(
            "a",
            { className: "nav-link", href: "index.html" },
            "Home ",
            e("span", { className: "sr-only" }, "(current)")
          )
        ),

        e(
          "li",
          { className: "nav-item dropdown" },
          e(
            "a",
            {
              className: "nav-link dropdown-toggle",
              href: "#",
              id: "navbarDropdown",
              role: "button",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            },
            "Teams"
          ),
          e(
            "div",
            { className: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
            e(
              "a",
              { className: "dropdown-item", href: "warren12U.html" },
              "Warren 12U"
            ),
            e(
              "a",
              { className: "dropdown-item", href: "#" },
              "Another action"
            ),
            e("div", { className: "dropdown-divider" }),
            e(
              "a",
              { className: "dropdown-item", href: "#" },
              "Something else here"
            )
          )
        ),
        e(
          "li",
          { className: "nav-item" },
          e("a", { className: "nav-link", href: "#" }, "AB Pitching, Hitting",
            e("br", null),
            " and Fitness"
          )
        )//,
        // e(
        //   "li",
        //   { className: "nav-item" },
        //   e(
        //     "a",
        //     { className: "nav-link disabled", href: "#" },
        //     "Disabled"
        //   )
        // )
      ),
      e(
        "form",
        { className: "form-inline my-2 my-lg-0" },
        e("input", {
          className: "form-control mr-sm-2",
          type: "search",
          placeholder: "Search",
          "aria-label": "Search"
        }),
        e(
          "button",
          { className: "btn btn-danger my-2 my-sm-0", type: "submit" },
          "Search"
        )
      )
    )
  );
}

const domContainer = document.querySelector('#navigation');
ReactDOM.render(e(Navigation), domContainer);
