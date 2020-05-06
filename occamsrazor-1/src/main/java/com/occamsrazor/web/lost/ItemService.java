package com.occamsrazor.web.lost;

import java.util.List;

import org.springframework.stereotype.Component;

import com.occamsrazor.web.util.Messenger;

@Component
public interface ItemService {
	public void register(Item lost);
	public List<Item> findAll();
	public Item findOne(String lostId);
	public Messenger modify(Item lost);
	public Messenger remove(Item lost);
}
