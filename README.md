# white_board
universal white board for all things

here in white board project we have to creat same functionality of real board of like writing , undo and written function.

HTML :- here firstly we used canvas for white board body , after that for different colours buttons are used followed by the DELET and UNDO button ..... and all assembly is inclosed
in 1 dive and on that dive we used text-aligin center  , and different classes and id,s are use to catch them in css and js. also some simple  internal css is used for algining all html UI .

JS :- here first we get canvas id and with help of this we creat and canvas variable using getElementById or querySelector , and set his height and width..., now for writing on canvas 
that is on board we creat an variable named as context usung getcontaxt of type 2d , 
After that we use and events on context variable named as   mousedown ,mouseup,  mousemove
ans to clear the board we used  clearRect on canvas height and width
