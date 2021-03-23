# Todo 프로젝트 - 영현

사용 스택: HTML, CSS, JS

## 아이디어 노트

### TODO

1. 잊지 말아야 할 일들을 기록
2. 해야할 일, 하고싶은 일을 기록
3. 안하면 잠들기전 후회할 일들
4. 적어 놨지만 적은것 조차 기억하지 못함

### 구현

1. 한가지 일에 몰두할 수 있게하기(지금 해야할일)
2. 일을 해냈을때 성취감 만들기  
   (오늘의 성취도?
   성취도에 따른 캐릭터 성장 - 성장에 숨겨진 요소 추가)
3. 하루 루틴 자동 추가
4. TODO list가 돋보이게
5. 우선순위에 따라 위치를 변경할 수 있게

---

## git

### 제목

1. 제목은 50자 이하, 마침표를 붙이지 않는다.
2. 제목에는 커밋 종류를 함께 작성.

> feat: 새로운 기능 추가  
> fix: 버그 수정  
> docs: 문서 수정  
> style: 코드 formatting, 세미 콜론 누락, 코드 변경 없는 경우  
> refactor: 코드 리팩토링  
> test: 테스트 코드, 리팩톨이 테스트 코드 추가  
> chore: 빌드 업무 수정, 패키지 매니저 수정

3. 과거시제를 사용하지 않고 명령조로 작성한다
4. 제목과 본문은 한 줄 띄어 분리한다.
5. 제목의 첫 글자는 대문자로 쓴다.
6. (이슈번호가 있다면) 제목이나 본문에 이슈 번호를 붙인다

### 본문

1. 선택사항, 모든 커밋에 본문내용을 작성할 필요는 없다.
2. 한 줄에 72자를 넘기지 않는다.
3. 어떻게(HOW)보다 무엇을, 왜(What, Why)에 맞춰 작성한다.
4. 설명뿐만 아니라, 커밋의 이유를 작성할 때에도 쓴다.

### Footer

1. 선택사항, 모든 커밋에 꼬릿말을 작성할 필요는 없다.
2. ISSUE Tracker ID를 작성할 떄 사용한다.

### Example

```
feat: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, preceded
  by a single space, with blank lines in between, but conventions
  vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```
