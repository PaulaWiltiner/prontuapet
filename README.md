# ProntuaPet
An application for storing pet health data


### ⌨️  Testes


**POST** `/pet`

**Body**

```jsx
{
  petName: "Laroy",
  RGA: "3.345.789",
  photo: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg",
  speciesId: 2,
  breed:"SRD",
  genderId: 2,
  castred: true,
  coat: "black"
}
```

- Deve responder com *status code* `201`.
- Caso exista algum erro no formato do corpo enviado, responder com *status code* `422` e os erros correspondentes.

**GET** `/pet`

**Response**
    
  ```jsx
    [
    	{
    	  id: 1,
    	  petName: "Laroy",
    	  RGA: "3.345.789",
    	  photo: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg",
    	  speciesId: 2,
    	  breed:"SRD",
    	  genderId: 2,
    	  castred: true,
    	  coat: "black"
    	},
    	{
    	  id: 2,
    	  petName: "Sushi",
    	  RGA: "4.885.780",
    	  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxo4-X0M8JhCDhGhH8FqOPoQgCNKtQw6yCA&usqp=CAU",
    	  speciesId: 1,
    	  breed:"SRD",
    	  genderId: 2,
    	  castred: true,
    	  coat: "white"
    	}
    ]
```
    
**GET** `/pet/rga?rga=x.xxx.xxx`
    
  **Response**
    
  ```jsx
    {
    	  id: 2,
    	  petName: "Sushi",
    	  RGA: "4.885.780",
    	  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxo4-X0M8JhCDhGhH8FqOPoQgCNKtQw6yCA&usqp=CAU",
    	  speciesId: 1,
    	  breed:"SRD",
    	  genderId: 2,
    	  castred: true,
    	  coat: "white"
    	}
  ```
    
**PUT** `/pet/id`
    
**Body**
    
  ```jsx
    {
      photoName: "Eima"
    }
```
    
**DELETE**  `/pet/id`

  - Se o id existir , deve responder com *status code* `204` e excluir o pet.
  - Caso o id não exista, responder com *status code* `404`.