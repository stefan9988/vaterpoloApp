
import speech_recognition as sr
from difflib import SequenceMatcher
from sys import exit

microphone = sr.Microphone()
recognizer = sr.Recognizer()


with microphone as micro_audio:
    print("Start Speaking ...")
    
    recognizer.adjust_for_ambient_noise(micro_audio, duration=0.5)
    audio = recognizer.listen(micro_audio)
    
    numbers=['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen',
             '1','2','3','4','5','6','7','8','9','10','11','12','13']
    colors=['white','dark']
    actions=['goal','assist','ejection','penalty']
    actions2=['drawn']
    
    print("Converting your speech to text...")
    #print("Did you say: ")
    dictionary=recognizer.recognize_google(audio,language= 'en-US',show_all=True)
    
    first_choice=dictionary.get('alternative')[0] #highest probability
    first_choice=first_choice['transcript']
    print(first_choice)
    
    words=first_choice.split()
    
    if len(words)<=4: #required length is max 4 words
        
        l=0 #for search
        number_found=False #word not found
        correction=words #for first iteration
        
        number=correction[0]
        
        if number in numbers:
            player_number=number
            number_found=True #first word recognized as player number
        
        while number_found==False:
        
            #if first word is not a number then find it in one of the other possible solutions
            l=l+1
            correction=dictionary.get('alternative')[l]
            correction=correction['transcript']
            correction=correction.split()
            number=correction[0]
            
            if number in numbers:
                player_number=number
                number_found=True #first word recognized as player number
                break
            
            if l>=len(dictionary.get('alternative'))-1:
                
                best_match=0
                
                for i in range(0,len(numbers)):
                    compare_to=numbers[i]
                    
                    match=SequenceMatcher(None, number, compare_to).ratio()
                    
                    if match>best_match:
                        best_match=match
                        player_number=compare_to
                        
                if best_match==0:
                    print('Please try again.')
                    exit()
                        
                number_found=True 
    
                
        l=0 #for search
        color_found=False #word not found
        correction=words #for first iteration
        
        color=correction[1]
        if color in colors:
            player_color=color
            color_found=True #second word recognized as player color
        
        while color_found==False:
        
            #if second word is not a color then find it in one of the other possible solutions
            l=l+1
            correction=dictionary.get('alternative')[l]
            correction=correction['transcript']
            correction=correction.split()
            color=correction[1]
            
            if color in colors:
                player_color=color
                color_found=True #second word recognized as player color
                break
            
            
            if l>=len(dictionary.get('alternative'))-1:
                
                best_match=0
                
                for i in range(0,len(colors)):
                    compare_to=colors[i]
    
                    match=SequenceMatcher(None, color, compare_to).ratio()
                    
                    if match>best_match:
                        best_match=match
                        player_color=compare_to
                        
                if best_match==0:
                    print('Please try again.')
                    exit()
                        
                color_found=True
                
        l=0 #for search
        action_found=False #word not found
        correction=words #for first iteration
        
        action=correction[2]
        if action in actions:
            player_action=action
            action_found=True #last words recognized as player action
        
        while action_found==False:
        
            l=l+1
            correction=dictionary.get('alternative')[l]
            correction=correction['transcript']
            correction=correction.split()
            action=correction[2]
            if action in actions:
                player_action=action
                action_found=True #last words recognized as player action 
                break
            
                
            if l>=len(dictionary.get('alternative'))-1:
                
                best_match=0
                
                for i in range(0,len(actions)):
                    compare_to=actions[i]
    
                    match=SequenceMatcher(None, action, compare_to).ratio()
                    
                    if match>best_match:
                        best_match=match
                        player_action=compare_to
                        
                if best_match==0:
                    print('Please try again.')
                    exit()        
                        
                action_found=True
                
        if len(correction)==4:
            
            l=0 #for search
            action2_found=False #word not found
            correction=words #for first iteration
            
            action2=correction[3]
            if action2 in actions2:
                player_action2=action2
                action2_found=True #last words recognized as player action
            
            while action2_found==False:
                
                l=l+1
                correction=dictionary.get('alternative')[l]
                correction=correction['transcript']
                correction=correction.split()
                action2=correction[3]
                if action2 in actions2:
                    player_action2=action2
                    action2_found=True #last words recognized as player action       
                    break
                
                    
                if l>=len(dictionary.get('alternative'))-1:
                    
                    best_match=0
                    
                    for i in range(0,len(actions2)):
                        compare_to=actions2[i]
    
                        match=SequenceMatcher(None, action2, compare_to).ratio()
                        
                        if match>best_match:
                            best_match=match
                            player_action2=compare_to
                            
                    if best_match==0:
                        print('Please try again.')
                        exit()
                            
                    action2_found=True 
        
        print('Commentator said: ')
        
        if len(correction)==4:
            print(player_number+' '+player_color+' '+player_action+' '+player_action2)
            f=open("talk_to_me.txt","a+")
            f.write(player_number+' '+player_color+' '+player_action+' '+player_action2+'\n')
            f.close()
        else:
            print(player_number+' '+player_color+' '+player_action)
            f=open("talk_to_me.txt","a+")
            f.write(player_number+' '+player_color+' '+player_action+'\n')
            f.close()
    
    else:
        print('Please try again.')





