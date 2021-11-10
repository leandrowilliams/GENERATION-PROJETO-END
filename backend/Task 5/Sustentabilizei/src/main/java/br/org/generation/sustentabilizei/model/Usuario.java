package br.org.generation.sustentabilizei.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private long id;
	@NotNull(message = "O Atributo Nome é Obrigatório!")
	@Size(min = 5 , max = 50 , message = "O Atributo Deve Conter no Minimo 5 e no Maximo 50 Caracteres")
	private String nome;
	@NotNull(message = "O E-mail é Obrigatório!")
	@Email
	private String usuario;
	@NotNull(message = "Senha é Obrigatória!")
	@Size(min = 8 , message = "Sua Senha deve conter 8 Caracteres")
	private String senha;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
