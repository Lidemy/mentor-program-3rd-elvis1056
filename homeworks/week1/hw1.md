## 交作業流程

通常我們會先從主要的 branch(master)，再開一條新的 branch 來做
這支新開的 branch 會帶著你的主 branch(master) 目前最新的狀態
當我完成所以開發的新功能/修正 Bug (這裡相當於交作業) 確認沒問題後再把他 Merge(合併)
回主要的 branch，緊接著一定要切換回到 master 這條 branch 切換確認後，把這條分支的 branch 刪除
整個流程就完成。

1. 首先 git branch 確認目前所有的 branch 及正在哪條 branch 上
2. 目前正在 master branch 上
3. 準備開始交作業
4. 假設我們現在要開一支新的 branch 叫做 hw1
5. git branch hw1(下完這個指令後，就建立完成，若不確定可以 git branch 再檢查一下)
6. 緊接著切換到新的 branch 上面
7. git checkout hw1
8. 把檔案做完後，利用 add 加入版本控制(這裡指說有新的檔案的時候)
9. git add . (將所有檔案加入版本控制)
10. git commit -m "這裡放你log檔裡面顯示的名稱，使用語意化的名稱"
11. 確認所有 commit 是否完成
12. git status
13. 完成後上傳 git push origin (branch 的名稱)，等待 merge
14. merge 完成後，將 github 上的 branch 刪除
15. 沒有問題就切回 master 這條主 branch 上面
16. git checkout master，git pull origin master
17. 將新開的這個 branch 刪除