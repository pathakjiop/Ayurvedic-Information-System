import tkinter as tk
from tkinter import ttk
import bard_api_client  

# Replace with your actual Bard API key
bard_client = bard_api_client.BardApiClient(api_key="")

# Functions to display information from Bard API
def display_herb_info():
    herb_name = herb_name_entry.get()
    try:
        response = bard_client.ask(f"Tell me about the Ayurvedic herb {herb_name}")
        herb_info = response.text
        result_label.config(text=herb_info)
    except Exception as e:
        print(f"Error fetching herb info: {e}")
        result_label.config(text="Error retrieving herb information.")

def display_remedies_for_ailment():
    ailment = ailment_name_entry.get()
    try:
        response = bard_client.ask(f"What are Ayurvedic remedies for {ailment}?")
        remedy_info = response.text
        result_label.config(text=remedy_info)
    except Exception as e:
        print(f"Error fetching remedy info: {e}")
        result_label.config(text="Error retrieving remedy information.")


# Create the main window
root = tk.Tk()
root.title("Ayurvedic Medicine Database")
root.state('zoomed')  # Maximize the window

# Apply styles
style = ttk.Style()
style.configure('Heading.TLabel', font=('Helvetica', 16, 'bold'))
style.configure('TButton', font=('Helvetica', 12))
style.configure('TLabel', font=('Helvetica', 12))
style.configure('TEntry', font=('Helvetica', 12))

# Create heading label and frames
heading_label = ttk.Label(root, text="Ayurvedic Medicine Database", style='Heading.TLabel')
heading_label.grid(column=0, row=0, columnspan=3, sticky=tk.EW)

frame1 = ttk.Frame(root, padding=10)
frame1.grid(column=0, row=1, sticky=(tk.W, tk.E))

frame2 = ttk.Frame(root, padding=10)
frame2.grid(column=0, row=2, sticky=(tk.W, tk.E))

# Create labels, entries, and buttons
herb_name_label = ttk.Label(frame1, text="Enter the name of the Ayurvedic herb:", style='TLabel')
herb_name_label.grid(column=0, row=0, sticky=tk.W)
herb_name_entry = ttk.Entry(frame1, font=('Helvetica', 12))
herb_name_entry.grid(column=1, row=0)
find_herb_button = ttk.Button(frame1, text="Find Herb Info", command=display_herb_info, style='TButton')
find_herb_button.grid(column=2, row=0)

ailment_name_label = ttk.Label(frame2, text="Enter the name of the common ailment:", style='TLabel')
ailment_name_label.grid(column=0, row=0, sticky=tk.W)
ailment_name_entry = ttk.Entry(frame2, font=('Helvetica', 12))
ailment_name_entry.grid(column=1, row=0)
find_remedy_button = ttk.Button(frame2, text="Find Remedy Info", command=display_remedies_for_ailment, style='TButton')
find_remedy_button.grid(column=2, row=0)

# main 
root.mainloop()
