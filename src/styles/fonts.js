import { css } from "styled-components"
import "../fonts/fonts.css"
import "../fonts/BCFalster/stylesheet.css"

export default css`
  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-HeavyObl.woff2") format("woff2"),
      url("FuturaPT-HeavyObl.woff") format("woff");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-Light.woff2") format("woff2"),
      url("FuturaPT-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-ExtraBoldObl.woff2") format("woff2"),
      url("FuturaPT-ExtraBoldObl.woff") format("woff");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-BoldObl.woff2") format("woff2"),
      url("FuturaPT-BoldObl.woff") format("woff");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPTCond-ExtraBold.woff2") format("woff2"),
      url("FuturaPTCond-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-Book.woff2") format("woff2"),
      url("FuturaPT-Book.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPTCond-ExtraBoldObl.woff2") format("woff2"),
      url("FuturaPTCond-ExtraBoldObl.woff") format("woff");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-DemiObl.woff2") format("woff2"),
      url("FuturaPT-DemiObl.woff") format("woff");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-MediumObl.woff2") format("woff2"),
      url("FuturaPT-MediumObl.woff") format("woff");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPTCond-BoldObl.woff2") format("woff2"),
      url("FuturaPTCond-BoldObl.woff") format("woff");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura";
    src: url("FuturaPT-Demi.woff2") format("woff2"),
      url("FuturaPT-Demi.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-LightObl.woff2") format("woff2"),
      url("FuturaPT-LightObl.woff") format("woff");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPTCond-MediumObl.woff2") format("woff2"),
      url("FuturaPTCond-MediumObl.woff") format("woff");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-Heavy.woff2") format("woff2"),
      url("FuturaPT-Heavy.woff") format("woff");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPTCond-BookObl.woff2") format("woff2"),
      url("FuturaPTCond-BookObl.woff") format("woff");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-ExtraBold.woff2") format("woff2"),
      url("FuturaPT-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPTCond-Medium.woff2") format("woff2"),
      url("FuturaPTCond-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-Bold.woff2") format("woff2"),
      url("FuturaPT-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPTCond-Bold.woff2") format("woff2"),
      url("FuturaPTCond-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-Medium.woff2") format("woff2"),
      url("FuturaPT-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura PT";
    src: url("FuturaPT-BookObl.woff2") format("woff2"),
      url("FuturaPT-BookObl.woff") format("woff");
    font-weight: normal;
    font-style: italic;
  }


@font-face {
  font-family: 'Kiona';
  src: url('Kiona-Regular.woff2') format('woff2'),
      url('Kiona-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'BC Falster Grotesk';
  src: url('BCFalsterGrotesk-MediumItalic.woff2') format('woff2'),
      url('BCFalsterGrotesk-MediumItalic.woff') format('woff');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'BC Falster Grotesk';
  src: url('BCFalsterGrotesk-Bold.woff2') format('woff2'),
      url('BCFalsterGrotesk-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'BC Falster Grotesk';
  src: url('BCFalsterGrotesk-Italic.woff2') format('woff2'),
      url('BCFalsterGrotesk-Italic.woff') format('woff');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'BC Falster Grotesk';
  src: url('BCFalsterGrotesk-Light.woff2') format('woff2'),
      url('BCFalsterGrotesk-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'BC Falster Grotesk';
  src: url('BCFalsterGrotesk-Medium.woff2') format('woff2'),
      url('BCFalsterGrotesk-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'BC Falster Grotesk';
  src: url('BCFalsterGrotesk-LightItalic.woff2') format('woff2'),
      url('BCFalsterGrotesk-LightItalic.woff') format('woff');
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: 'BC Falster Grotesk';
  src: url('BCFalsterGrotesk-BoldItalic.woff2') format('woff2'),
      url('BCFalsterGrotesk-BoldItalic.woff') format('woff');
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: 'BC Falster Grotesk';
  src: url('BCFalsterGrotesk-Regular.woff2') format('woff2'),
      url('BCFalsterGrotesk-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}



`
