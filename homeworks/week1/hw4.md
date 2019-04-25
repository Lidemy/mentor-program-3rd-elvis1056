## 跟你朋友介紹 Git

首先我們要先了解為何要使用 git？
主要目的一個檔案會有不同的版本，但我們希望把每個版本都保存起來(主要概念)
git 說穿了就是一套幫你做版本控制的程式。
專業講法「版本控制」是一種軟體工程開發技巧

* git init：我要對這個資料夾做版本控制
  * 我現在有個叫做 xxx 專案資料夾，我現在想要開始使用 Git 開始管理，因此我先將目錄切換到 xxx 底下後輸入git init
* git status：檢查目前 Git 的狀態
* git add：會有兩個狀態 stage、unstage 
  * 如果還沒使用 add test.js(某檔案)，在 git status 檢查下會顯示
```
Untracked files:
(use "git add ..." to include in what will be committed)
```
  * 如果已經使用 add 某檔案，在 git status 檢查下會顯示
```
Changes to be committed:
(use "git rm --cached ..." to unstage)
new file:   test.js(某檔案)
```
* git commit -m ""：新建一個版本( m 這裡指的是 message )
* git log：查看過去 commit 的紀錄
* git checkout：想回到過去(切換到舊的版本)
* git .gitignore：把不想要建立版本控制的檔案全部放到這邊(不重要的邊緣人)
* git branch 某分支名稱：建立一條某分支名稱的
  * git branch -d 某分支名稱：刪除一條某分支名稱的 branch
  * git branch -v：查看現在所有分支有哪些
* git checkout 某分支名稱：切換到某分支名稱，繼續做開發
* git merge 某分支名稱：
  * 首先一定要在主要的 master 上，再將別人的分支「合併到主幹上」
* conflict 的時候處理步驟：
```
1. 將發生 confict 的檔案打開，處理內容( 別忘了刪除<<<、===、>>> )。
2. 使用 git add 將處理好的檔案加入 stage。
3. 反覆步驟 1~2 直到所有 confict 處理完畢。
4. git commit 提交合併訊息。
5. 完成
```
* git reset：總共有三種模式 --soft、--mixed、--hard
  * git reset --soft：僅移除commit變成新版未 commit，內容仍是新版的
  * git reset --hard：回到上一版版本，其間變更完全移除，內容及狀態皆是上一版