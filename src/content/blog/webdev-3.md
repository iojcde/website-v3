---
title: '[PACKET] Next.js를 활용한 웹개발 겨우 마스터하기 3탄 '
status: 'published'
slug: 'webdev-1'
description: ''
coverImage: ''
tags: []
publishedAt: '2024-06-02T01:55:09.591Z'
---
지금까지는 HTML, CSS, JS 를 사용해 간단한 웹사이트를 제작해 보았다.

하지만, 이러한 구조로 웹사이트를 제작하는 것은 간단한 프로토타입이나 작은 프로젝트에서는 괜찮을 수 있다. 그러나 실제로 대규모 웹 애플리케이션을 개발할 때는 비효율적일 수 있다.


1. **코드가 드러워짐**: 이벤트 리스너를 많이 사용할수록 코드가 복잡해지고 관리가 어려워진다. 특히 대규모 애플리케이션에서는 이벤트 핸들링이 복잡해지면 버그를 찾기가 매우 어려워진다. 

2. **상태 관리의 어려움**: 이벤트 리스너를 통해 상태를 관리하려면 전역 변수나 DOM 요소의 속성을 사용해야 하는데, 다양한 기능이 있는 웹사이트에서는 이 관리가 매우 복잡해질 수 밖에 없다. 예를 들어, 다양한 파일에서 같은 변수를 접근하려 할때 문제가 생길 수 있는 것이다. 

3. **성능 문제**: 이벤트 리스너를 많이 사용하면 브라우저의 성능에 부담을 줄 수 있다는 문제도 있다. 특히 이벤트 리스너가 복잡하거나 실행 주기가 짧고 여러번 실행되는 경우에는 성능 문제가 발생할 수 있다. 자바스크립트는 기본적으로 싱글 쓰레드 언어라, 중요한 작업들이 한 쓰레드 위에서 실행되어, 하나의 작업이 끝나지 않으면 다른 작업들이 지연될 수 있다고 생각하면 좋다. 


이러한 문제를 해결하기 위해 우리를 위해 똑똑한 사람들이 **프론트엔드 프레임워크**들을 개발하기 시작했다. 

React, Vue.js, Angular 같은 프레임워크들은 컴포넌트 기반 구조로 코드를 더 잘 구조화할 수 있게 하고, 상태 관리를 쉽게할 수 있도록 도와준다. 또한, 가상 DOM 등의 기술을 사용하여 성능을 최적화하는 경우도 많다.

이러한 프레임워크를 사용하면 이벤트 리스너를 직접 작성할 필요 없이 컴포넌트 간의 통신이나 상태 관리를 더 효율적으로 할 수 있다.

우리가 사용할 프런트엔드 프레임워크는 페이스북에서 개발한 React이다. React는 오픈소스로 개발되어 페이스북 뿐만 아니라, 외부 기여자들도 매우 많은 대형 프로젝트이다. 

다음 포스트에는 React의 기본 문법에 대해 알아보자.

[[안지호의 React & Next.js 겨우 마스터하기 - 4탄]]