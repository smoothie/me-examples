<template>
  <button
      :class="className"
  >
    <slot></slot>
  </button>
</template>

<script>
export const CLASSNAMES = {
  BLOCK: 'awesome-button',
}

export const TYPES_DESIGN = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
}

export const DEFAULT_DESIGN = TYPES_DESIGN.PRIMARY;

export default {
  name: 'awesome-button',
  props: {
    design: {
      type: String,
      default: DEFAULT_DESIGN,
    },
  },
  computed: {
    className() {
      return `${CLASSNAMES.BLOCK} -${this.colorModifierName}`;
    },
    colorModifierName() {
      switch (this.design) {
        case TYPES_DESIGN.SECONDARY:
        case TYPES_DESIGN.TERTIARY:
          return this.design;
      }

      return DEFAULT_DESIGN;
    },
  },
}
</script>
