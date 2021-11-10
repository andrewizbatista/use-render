<div align="center">

# `useRender`

A React hook that forces a render on a component.

![use-render version](https://img.shields.io/npm/v/@andrewizbatista/use-render?style=flat-square&color=yellow&label=NPM) ![use-render minified size](https://img.shields.io/bundlephobia/min/@andrewizbatista/use-render?style=flat-square&color=blue&label=Minified+Size) ![use-render license](https://img.shields.io/npm/l/@andrewizbatista/use-render?style=flat-square&color=green&label=License)

![created by @andrewizbatista](https://img.shields.io/badge/Created%20By-@andrewizbatista-crimson?style=flat-square)

</div>

## <a name="index"></a>Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## <a name="getting-started"></a>Getting Started

#### [`yarn`](https://yarnpkg.com/package/@andrewizbatista/use-render)

```
yarn add @andrewizbatista/use-render
```

#### [`npm`](https://www.npmjs.com/package/@andrewizbatista/use-render)

```
npm install @andrewizbatista/use-render
```

## <a name="usage"></a>Usage

```tsx
import { useRender } from '@andrewizbatista/use-render';

const Usage = () => {
  const { forceRender } = useRender();

  return <Button onClick={forceRender}>Render this Component</Button>;
};
```

## <a name="contributing"></a>Contributing

Want to help? Feel free to open an [Issue](https://github.com/andrewizbatista/use-render/issues) or create a [Pull Request](https://github.com/andrewizbatista/use-render/pulls) and let's get started 🚀

## <a name="license"></a>License

[MIT](https://github.com/andrewizbatista/use-render/blob/main/LICENSE) © André Batista ([@andrewizbatista](https://github.com/andrewizbatista))
