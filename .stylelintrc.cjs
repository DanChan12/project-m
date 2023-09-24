module.exports = {
  // 扩展第三方插件规范stylelint-config-standard
  extends: 'stylelint-config-standard',
  rules: {
    indentation: 2, // 样式缩进
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include'],
      },
    ], // 禁止使用未知规则
    'block-no-empty': true, // 禁止空块
    'color-no-invalid-hex': true,
    'comment-no-empty': true, // 禁止使用无效的十六进制颜色
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [
          // 忽略不同值的重复属性，表示可以覆盖
          'consecutive-duplicates-with-different-values',
        ],
      },
    ], // 禁止空的注释
    // "string-quotes": "double", // 禁止使用单引号
    'declaration-block-no-shorthand-property-overrides': true, // 禁止在声明块中使用重复的属性禁止缩写属性覆盖所包含的子属性
    'font-family-no-duplicate-names': true, // 禁止使用重复的字体系列名称
    'font-family-no-missing-generic-family-keyword': true, // 禁止字体值缺少通用字体
    'function-calc-no-invalid': true, // 禁止在calc函数内使用无效的表达式
    'function-calc-no-unspaced-operator': true, // calc函数计算符号前后必须有空格
    'function-linear-gradient-no-nonstandard-direction': true, // linear-gradient时必须使用to或数值+单位指明渐变轨迹
    'keyframe-declaration-no-important': true, // keyframe的to属性不允许使用!important
    'media-feature-name-no-unknown': true, // 禁止使用未知的媒体功能名称
    'no-descending-specificity': null, // 禁止低优先级的选择器覆盖（出现在后面）高优先级的选择器样式
    'no-duplicate-at-import-rules': true, // 禁止import重复样式
    'no-duplicate-selectors': true, // 禁止使用重复的选择器
    'no-empty-source': true, // 禁止无意义的制表符或换行符
    'no-extra-semicolons': true, // 禁止使用多余的分号
    'no-invalid-double-slash-comments': true, // 禁止使用//来进行注释
    'property-no-unknown': [
      true,
      {
        ignoreAtRules: [/List$/],
      },
    ], // 禁止使用未知属性
    'selector-pseudo-class-no-unknown': true, // 禁止使用未知的伪类
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ], // 禁止使用未知的伪选择器
    'selector-type-no-unknown': true, // 禁止使用未知的选择器
    'string-no-newline': true, // 禁止字符串使用（未转义的）换行符
    'unit-no-unknown': true, // 禁止使用未知的单位
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          // 相同类型可除外不空行
          'blockless-after-same-name-blockless', // 第一行除外
          'first-nested',
        ],
        ignore: ['after-comment'],
      },
    ], // 在新的规则前必须空一行
    'at-rule-name-case': 'lower', // 规则名称指定为小写
    'at-rule-name-space-after': 'always-single-line', // 单行声明时，规则名称后面得有一个空格
    'at-rule-semicolon-newline-after': 'always', // 单行样式定义的分号后面必须换行
    'block-closing-brace-empty-line-before': 'never', // 右括号之前不能空行
    'block-closing-brace-newline-after': 'always', // 右括号之后必须换行
    'block-closing-brace-newline-before': 'always-multi-line', // 多行块级样式时，右括号之前必须换行
    'block-closing-brace-space-before': 'always-single-line', // 单行样式时，右括号之前必须有空格
    'block-opening-brace-newline-after': 'always-multi-line', // 多行块级样式时，左括号之后必须换行
    'block-opening-brace-space-after': 'always-single-line', // 单行样式时，左括号之后必须有空格
    'block-opening-brace-space-before': 'always', // 左括号之前必须有空格或者换行
    'color-hex-case': 'lower', // 十六进制颜色指定小写
    'color-hex-length': 'short', // 十六进制颜色能三位表示时不允许六位
    'comment-empty-line-before': [
      'always',
      {
        except: [
          // 嵌套注释的第一个不用
          'first-nested',
        ],
        ignore: ['stylelint-commands'],
      },
    ], // 注释之前必须有空行
    'comment-whitespace-inside': 'always', // 注释文字前后必须有空格或者换行
    'custom-property-empty-line-before': [
      'always',
      {
        except: [
          'after-custom-property', // 自定义属性之后不用
          'first-nested', // 第一个不用
        ],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ], // 自定义属性前必须有空行
    'declaration-bang-space-after': 'never', // 强制声明!之后不能使用空格
    'declaration-bang-space-before': 'always', // 强制声明!之前必须使用空格
    'declaration-block-semicolon-newline-after': 'always-multi-line', // 多行块级样式时，分号后面必须换行
    'declaration-block-semicolon-space-after': 'always-single-line', // 单行样式时，分后后面必须有一个空格
    'declaration-block-semicolon-space-before': 'never', // 分号的前面不能有空格
    'declaration-block-single-line-max-declarations': 1, // 多个选择器不能写成多行
    'declaration-block-trailing-semicolon': null, // 样式结束必须使用分号
    'declaration-colon-newline-after': null, // 如果值时多行，则：之后必须换行
    'declaration-colon-space-after': 'always-single-line', // 单行样式，则：之后必须有空格
    'declaration-colon-space-before': 'never', // ：之前不能有空格
    'declaration-empty-line-before': [
      'always',
      {
        except: [
          // 非第一行不用
          'after-declaration', // 第一行不用
          'first-nested',
        ],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ], // 样式之前必须有空行
    'function-comma-newline-after': 'always-multi-line', // 值有多行时换行，逗号必须在最后
    'function-comma-space-after': 'always-single-line', // 逗号之后必须有一个空格
    'function-comma-space-before': 'never', // 逗号之前不能有空格
    'function-max-empty-lines': 0, // 值之间不能有空行
    'function-name-case': 'lower', // 值中的函数名称必须是小写
    'function-parentheses-newline-inside': 'always-multi-line', // 值中的函数值要么一行，要么单独多行
    'function-parentheses-space-inside': 'never-single-line', // 值中的函数值单行不允许值后的空格
    'function-whitespace-after': 'always', // 样式值多个是必须有空格或换行
    'length-zero-no-unit': true, // 样式值为0时不允许带单位
    'max-empty-lines': 1, // 样式之间最多只能空一行
    'media-feature-colon-space-after': 'always', // 媒体查询中，：之后必须有空格
    'media-feature-colon-space-before': 'never', // 媒体查询中，：之前不能有空格
    'media-feature-name-case': 'lower', // 媒体查询的属性名必须时小写
    'media-feature-parentheses-space-inside': 'never', // 媒体查询的括号里面不能紧挨着空格
    'media-feature-range-operator-space-after': 'always', // 媒体查询的运算符后面必须有空格
    'media-feature-range-operator-space-before': 'always', // 媒体查询的运算符前面必须有空格
    'media-query-list-comma-newline-after': 'always-multi-line', // 多行媒体查询的逗号后面必须有空格或换行
    'media-query-list-comma-space-after': 'always-single-line', // 单行媒体查询的逗号后面必须有空格或换行
    'media-query-list-comma-space-before': 'never', // 单行媒体查询的逗号前面不能有空格
    'no-eol-whitespace': true, // 禁止行尾的空格
    'no-missing-end-of-source-newline': true, // 样式文件最后必须有空行
    'number-leading-zero': 'always', // 样式值小数点前的0不能省略
    'number-no-trailing-zeros': true, // 样式值小数点时最后的0必须去掉
    'property-case': 'lower', // 样式属性必须是小写
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: [
          // 除了第一行
          'first-nested',
        ],
        ignore: ['after-comment'],
      },
    ], // 样式之间要求使用空行
    'selector-attribute-brackets-space-inside': 'never', // 属性选择器里面不能有空格
    'selector-attribute-operator-space-after': 'never', // 属性选择器=后面不能有空格
    'selector-attribute-operator-space-before': 'never', // 属性选择器=前面不能有空格
    'selector-combinator-space-after': 'always', // 选择器组合时符号之后必须有空格
    'selector-combinator-space-before': 'always', // 选择器组合时符号之前必须有空格
    'selector-descendant-combinator-no-non-space': true, // 选择器组合使用空格时，仅使用单个空格且不能换行
    'selector-list-comma-newline-after': 'always', // 选择器多个并列时在，之后必须换行
    'selector-list-comma-space-before': 'never', // 选择器多个并列时在，之前不能换行
    'selector-max-empty-lines': 0, // 选择器多个并列时不能有空行
    'selector-pseudo-class-case': 'lower', // 选择器的伪类必须是小写
    'selector-pseudo-class-parentheses-space-inside': 'never', // 选择器伪类括号里面不能紧靠着括号
    'selector-pseudo-element-case': 'lower', // 选择器伪元素必须是小写
    'selector-pseudo-element-colon-notation': 'double', // 选择器伪元素必须使用双冒号
    'selector-type-case': 'lower', // 选择器标签必须是小写
    'unit-case': 'lower', // 样式值的单位必须是小写
    'value-keyword-case': 'lower', // 样式值必须是小写
    'value-list-comma-newline-after': 'always-multi-line', // 样式值多行时逗号后面不能有空格
    'value-list-comma-space-after': 'always-single-line', // 样式值单行时逗号后面必须有空格
    'value-list-comma-space-before': 'never', // 样式值逗号前不能有空格
    'value-list-max-empty-lines': 0, // 样式值之间不能有空行
  },
};
