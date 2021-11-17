package br.org.generation.sustentabilizei.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.org.generation.sustentabilizei.model.Usuario;
import br.org.generation.sustentabilizei.model.UsuarioLogin;
import br.org.generation.sustentabilizei.repository.UsuarioRepository;

/*
 Classe responsavel pela autenticação do usuário através da criação de um token.
*/

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Optional <Usuario> cadastrarUsuario (Usuario usuario) {
		
		if (usuarioRepository.findByUsuario (usuario.getUsuario()).isPresent())
		{
			return Optional.empty();
		}

		usuario.setSenha(criptografarSenha(usuario.getSenha()));
		
		return Optional.of(usuarioRepository.save(usuario));
}
	
	public  Optional <Usuario> atualizarUsuario(Usuario usuario)
	{
		if (usuarioRepository.findById(usuario.getId()).isPresent() && !usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
		{
			usuario.setSenha(criptografarSenha(usuario.getSenha()));
			
			return Optional.of(usuarioRepository.save(usuario));
		}
		
		return Optional.empty();
	}
	
	public  Optional <UsuarioLogin> autenticarUsuario(Optional <UsuarioLogin> usuarioLogin)
	{
		Optional <Usuario> usuario= usuarioRepository.findByUsuario(usuarioLogin.get().getUsuario());
		
		if (usuario.isPresent())
		{
			if (compararSenhas(usuarioLogin.get().getSenha(), usuario.get().getSenha()))
			{
				String token= gerarBasicToken(usuarioLogin.get().getUsuario(), usuarioLogin.get().getSenha());
				usuarioLogin.get().setId(usuario.get().getId());
				usuarioLogin.get().setNome(usuario.get().getNome());
				usuarioLogin.get().setSenha(usuario.get().getSenha());
				usuarioLogin.get().setToken(token);
				
				return usuarioLogin;
			}
		}
		
		return Optional.empty();
	}
	
	private String gerarBasicToken (String usuario, String senha)
	{
		String tokenBase= usuario + ":" + senha;
		byte[] tokenBase64= Base64.encodeBase64(tokenBase.getBytes(Charset.forName("US-ASCII")));
		return "Basic " + new String(tokenBase64);
	}
	
	private String criptografarSenha (String senha)
	{
		BCryptPasswordEncoder encoder= new BCryptPasswordEncoder();
		
		return encoder.encode(senha);
	}
	
	private Boolean compararSenhas (String senhaDigitada, String senhaBanco)
	{
		BCryptPasswordEncoder encoder= new BCryptPasswordEncoder();
		
		return encoder.matches(senhaDigitada, senhaBanco);
	}
}