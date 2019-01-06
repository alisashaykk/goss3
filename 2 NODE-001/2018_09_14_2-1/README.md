Моделирование взаимодействия «клиент-сервер» с помощью программы telnet.  

Подготовлены данные для отправики запроса (url-кодированное имя):  
name=%D0%90%D0%BB%D0%B8%D1%81%D0%B0  
fname=%D0%A8%D0%B0%D0%B9%D1%85%D0%B5%D1%82%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0  

telnet 151.248.115.32 80  
POST /api/req HTTP/1.1  
Host: kodaktor.ru  
Content-Type:application/x-www-form-urlencoded  
Content-Length:120    
//2 раза 'enter'

name=%D0%90%D0%BB%D0%B8%D1%81%D0%B0&fname=%D0%A8%D0%B0%D0%B9%D1%85%D0%B5%D1%82%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0    
//1 раз 'enter'

Получен ответ от сервера с X-Test: POST3f77956a1f0e2710efd7b595af23463d


